import dayjs from "dayjs";
import Bottom from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { Alert, Keyboard, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { useTransactionRepository } from "@/storage/useTransactionRepository";
import { TransactionTypeSelect } from "@/components/TransactionTypeSelect";
import { useGoalRepository } from "@/storage/useGoalRepository";
import { TransactionTypes } from "@/components/Transaction";
import { Transactions } from "@/components/Transactions";
import { currencyFormat } from "@/utils/currencyFormat";
import { BottomSheet } from "@/components/BottomSheet";
import { BackButton } from "@/components/BackButton";
import { Progress } from "@/components/Progress";
import { Loading } from "@/components/Loading";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { mocks } from "@/utils/mocks";

type Details = {
  name: string
  total: string
  current: string
  percentage: number
  transactions: TransactionTypes[]
}

export default function Details() {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState<"up" | "down">("up");
  const [goal, setGoal] = useState<Details>({} as Details);

  const routeParams = useLocalSearchParams();
  const goalId = Number(routeParams.id);

  const bottomSheetRef = useRef<Bottom>(null);
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  const useGoal = useGoalRepository();
  const useTransaction = useTransactionRepository();

  function fetchDetails() {
    try {
      if (goalId) {
        // const goal = mocks.goal;
        const goal = useGoal.show(goalId);
        // const transactions = mocks.transactions;
        const transactions = useTransaction.findByGoal(goalId);

        if (!goal || !transactions) {
          return router.back();
        }

        setGoal({
          name: goal.name,
          current: currencyFormat(goal.current),
          total: currencyFormat(goal.total),
          percentage: (goal.current / goal.total) * 100,
          transactions: transactions.map((item) => ({
            ...item,
            date: dayjs(item.created_at).format("DD/MM/YYYY [às] HH:mm"),
          })),
        });

        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleNewTransaction() {
    try {
      let amountAsNumber = Number(amount.replace(",", "."));

      if (isNaN(amountAsNumber)) {
        return Alert.alert("Erro", "Valor inválido.");
      }

      if (type === "down") {
        amountAsNumber = amountAsNumber * -1;
      }

      // console.log({ goalId, amount: amountAsNumber });
      useTransaction.create({ goalId, amount: amountAsNumber });

      Alert.alert("Sucesso", "Transação registrada!");

      handleBottomSheetClose();
      Keyboard.dismiss();

      setAmount("");
      setType("up");

      fetchDetails();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDetails();
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View className="flex-1 p-8 pt-12">
      <BackButton />

      <Header title={goal.name} subtitle={`${goal.current} de ${goal.total}`} />

      <Progress percentage={goal.percentage} />

      <Transactions transactions={goal.transactions} />

      <Button title="Nova transação" onPress={handleBottomSheetOpen} />

      <BottomSheet
        ref={bottomSheetRef}
        title="Nova transação"
        snapPoints={[0.01, 284]}
        onClose={handleBottomSheetClose}
      >
        <TransactionTypeSelect onChange={setType} selected={type} />

        <Input
          placeholder="Valor"
          keyboardType="numeric"
          onChangeText={setAmount}
          value={amount}
        />

        <Button title="Confirmar" onPress={handleNewTransaction} />
      </BottomSheet>
    </View>
  )
}