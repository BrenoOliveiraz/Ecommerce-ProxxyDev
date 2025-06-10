import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-12 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        
        {/* Logo e descrição */}
        <div>
          <h2 className="text-2xl font-bold text-white">VISCERAL</h2>
          <p className="text-gray-300 mt-2 max-w-xs">
            Produtos selecionados com autenticidade e estilo. Explore o melhor da moda e inovação com a gente.
          </p>
        </div>

        {/* Links úteis */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h3 className="font-semibold mb-2">Links</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="/" className="hover:underline">Início</Link></li>
              <li><Link href="/orders" className="hover:underline">Meus Pedidos</Link></li>
              <li><Link href="/basket" className="hover:underline">Carrinho</Link></li>
  
            </ul>
          </div>

          {/* Contato / Redes */}
          <div>
            <h3 className="font-semibold mb-2">Contato</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Email: contato@visceral.com</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li>
                <a href="https://www.instagram.com" target="_blank" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} VISCERAL. Todos os direitos reservados.
      </div>
    </footer>
  );
}
