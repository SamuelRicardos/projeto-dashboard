"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/sales";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";
import { Sidebar } from '@/components/sidebar';
import ThemeToggle from '@/components/tema';

export default function Dashboard() {

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  return (
    <>
      <Sidebar />
    <main className="sm:ml-14 p-4">
      <div className="hidden sm:flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 dark:text-white select-none">
                Total vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>
              Total vendas em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 dark:text-white select-none">
                Novos clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>
              Novos clientes em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">234</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 dark:text-white select-none">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>
              Total de pedidos hoje
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">65</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 dark:text-white select-none">
                Total pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-4" />
            </div>

            <CardDescription>
              Total de pedidos em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">2300</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview></ChartOverview>
        <Sales />
      </section>
    </main>
    </>
  )
}
