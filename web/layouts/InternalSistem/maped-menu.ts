import { IconType } from 'react-icons/lib/esm'
import { GoCreditCard, GoDashboard } from 'react-icons/go'
import { CgCalculator } from 'react-icons/cg'
import { FiUsers } from 'react-icons/fi'
import { BsInboxes } from 'react-icons/bs'
import { IoMdCopy, IoMdExit } from 'react-icons/io'

type ItemMenu = {
    text: string
    icon: IconType
    childrens?: Omit<ItemMenu, 'childrens'>[]
}

export default [
    { text: 'Dashboard', icon: GoDashboard },
    { text: 'Pedidos', icon: CgCalculator },
    { text: 'Clientes', icon: FiUsers },
    { text: 'Formas de pagamento', icon: GoCreditCard },
    { text: 'Estoque', icon: BsInboxes },
    { text: 'Carnes', icon: IoMdCopy },
    { text: 'Sair', icon: IoMdExit },
] as ItemMenu[]
