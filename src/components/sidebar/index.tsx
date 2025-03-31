"use client"

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Link from "next/link"
import { Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, Users } from "lucide-react"
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { signOut } from "firebase/auth" // Importando signOut do Firebase
import { auth } from "../../lib/firebase" // Certifique-se de que o caminho está correto
import { useRouter } from "next/navigation"

export function Sidebar() {
    const router = useRouter()

    const handleLogout = async () => {
        try {
            await signOut(auth) // Desconectar o usuário
            router.push("/") // Redirecionar para a tela de login
        } catch (error) {
            console.error("Erro ao sair:", error)
        }
    }

    return (
        <div className="flex w-full flex-col bg-muted/40">

            <aside
                className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link href="#" className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
                            <Package className="h-4 w-4"></Package>
                            <span className="sr-only">Dashboard Avatar</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Home className="h-5 w-5"></Home>
                                    <span className="sr-only">Início</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Início</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <ShoppingBag className="h-5 w-5"></ShoppingBag>
                                    <span className="sr-only">Pedidos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Pedidos</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Package className="h-5 w-5"></Package>
                                    <span className="sr-only">Produtos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Produtos</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Settings2 className="h-5 w-5 text-red-500"></Settings2>
                                    <span className="sr-only">Configurações</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Configurações</TooltipContent>
                        </Tooltip>

                    </TooltipProvider>
                </nav>

                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={handleLogout} // Lida com o clique no botão "Sair"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                                >
                                    <LogOut className="h-5 w-5" />
                                    <span className="sr-only">Sair</span>
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="right">Sair</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            {/* div mobile */}
            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className='w-5 h-5'></PanelBottom>
                                <span className="sr-only">Abrir / fechar menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className='sm:max-w-x'>
                            {/* ver depois o p-4 */}
                            <nav className="grid gap-6 text-lg font-medium p-4">
                                <Link href="#" className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                                    prefetch={false}
                                >
                                    <Package className="h-5 w-5 transition-all"></Package>
                                    <span className="sr-only">Logo do projeto</span>
                                </Link>

                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Home className="h-5 w-5 transition-all"></Home>
                                    Início
                                </Link>

                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <ShoppingBag className="h-5 w-5 transition-all"></ShoppingBag>
                                    Pedidos
                                </Link>

                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Package className="h-5 w-5 transition-all"></Package>
                                    Produtos
                                </Link>

                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Users className="h-5 w-5 transition-all"></Users>
                                    Clientes
                                </Link>

                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Settings2 className="h-5 w-5 transition-all"></Settings2>
                                    Configurações
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    )
}