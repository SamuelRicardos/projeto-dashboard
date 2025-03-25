import { Sheet , SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Link from "next/link"
import { Home, Package, PanelBottom, Settings2, ShoppingBag, Users } from "lucide-react"

export function Sidebar() {
    return(
        <div className="flex w-full flex-col bg-muted/40">



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