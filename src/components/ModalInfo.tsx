import { BookCheck, Calculator } from "lucide-react"

interface ModalInfoProps {
  open: boolean
  onClose: () => void
}

export function ModalInfo({ open, onClose }: ModalInfoProps) {
  if (!open) return null

  return (
    <div className="inset-0 fixed z-10 bg-black/60 py-10">
      <div className=" p-4 rounded shadow-lg bg-zinc-200 h-full w-1/2 mx-auto flex flex-col justify-between">
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-2xl text-center mt-8 font-bold">Informações sobre o sistema</h2>
          <div>
            <h3 className="text-xl p-1 mt-4 font-bold">Criar Linhas</h3>
            <p>- Para criar uma linha em branco, basta clicar em ( + ) com o botão esquerdo do mouse.</p>
            <p>- Para criar uma linha herdada, clique em ( + ) com o botão direito do mouse. (ao criar uma linha herdada,
              tudo que estiver na linha superior será clonado, exceto informações dos passageiros;
              e o sentido da viagem sera invertido.)</p>
          </div>

          <h3 className="text-xl p-1 mt-4 font-bold">Salvar Tabela</h3>
          <p>- Ao clicar em "Salvar em excel" A Tabela sera gerada no padrão ANTT
            com as informações que foram preenchidas no sistema de BCO.</p>

          <h3 className="text-xl p-1 mt-4 font-bold">Calculo de Passageiros</h3>
          <p className="flex gap-1">- Ao clicar no botão {<Calculator className="size-4" />}
            será inserido automaticamente na tabela</p>
          <p>- Ao inserir passageiros do tipo idoso ou passe livre; será subtraido
            automaticamente do total de passageiros, indicando a quantidade de gratuidades(idoso e P.Livre)
            e a de Pagantes.</p>
        </div>


        <footer className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Fechar
          </button>
        </footer>
      </div>


    </div>
  )
}