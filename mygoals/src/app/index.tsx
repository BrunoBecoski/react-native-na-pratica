import dayjs from "dayjs";
import Bottom from "@gorhom/bottom-sheet";
import { Alert, Keyboard, View } from "react-native";
import { useEffect, useRef, useState } from "react";

import { Transactions, TransactionsTypes } from "@/components/Transactions";
import { useGoalRepository } from "@/storage/useGoalRepository";
import { useTransactionRepository } from "@/storage/useTransactionRepository";
import { Goals, GoalsTypes } from "@/components/Goals";
import { BottomSheet } from "@/components/BottomSheet";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { mocks } from "@/utils/mocks";
import { router } from "expo-router";

export default function Home() {  
  const [goals, setGoals] = useState<GoalsTypes>([]);
  const [transactions, setTransactions] = useState<TransactionsTypes>([]);
  const [name, setName] = useState('');
  const [total, setTotal] = useState('');

  const bottomSheetRef = useRef<Bottom>(null);
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  const useGoal = useGoalRepository();
  const useTransaction = useTransactionRepository();

  function handleDetails(id: string) {
    router.navigate('/details/' + id);
  }

  function handleCreate() {
    try {
      const totalAsNumber = Number(total.toString().replace(',', '.'));

      if (isNaN(totalAsNumber)) {
        return Alert.alert('Erro', 'Valor inválido.');
      }

      useGoal.create({ name, total: totalAsNumber });

      Keyboard.dismiss();
      handleBottomSheetClose();
      Alert.alert('Sucesso', 'Meta cadastrada!');

      setName('');
      setTotal('');

      fetchGoals();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar.');
      console.log(error);
    }
  }

  function fetchGoals() {
    try {
      // const response = mocks.goals;
      const response = useGoal.all();

      setGoals(response);
    } catch (error) {
      console.log(error);
    }
  }

  function fetchTransactions() {
    try {
      // const response = mocks.transactions;
      const response = useTransaction.findLatest();

      setTransactions(
        response.map((item) => ({
          ...item,
          date: dayjs(item.created_at).format('DD/MM/YYYY [às] HH:mm'),
        }))
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchGoals();
    fetchTransactions();
  }, [])

  return (
    <View className="flex-1 p-8">
      <Header
        title="Suas metas"
         subtitle="Poupe hoje para colher os frutos amanhã"
      />

      <Goals
        goals={goals}
        onAdd={handleBottomSheetOpen}
        onPress={handleDetails}
      />

      <Transactions transactions={transactions} />

      <BottomSheet
        ref={bottomSheetRef}
        title="Nova meta"
        snapPoints={[0.01, 284]}
        onClose={handleBottomSheetClose}
      >
        <Input
           placeholder="Nome da meta" 
           onChangeText={setName} 
           value={name}
        />

        <Input
          placeholder="Valor"
          keyboardType="numeric"
          onChangeText={setTotal}
          value={total}
        />

        <Button title="Criar" onPress={handleCreate} />
      </BottomSheet>

    </View>
  )
}
