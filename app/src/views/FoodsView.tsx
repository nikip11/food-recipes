import { useEffect } from "react"
import Loading from "@/components/ui/Loading"
import { useGetFoods } from "@/hooks/useFoods"
import { Food } from "@/interfaces/types"
import Button from "@/components/ui/Button"
import Table, { ColumnType } from "@/components/ui/Table/Table"

const columns: ColumnType<Food>[] = [
  {
    label: "Nombre",
    accesor: "title",
  },
  {
    label: "Calorías",
    accesor: "value100",
  },
  {
    label: "Porción",
    accesor: "portion",
  },
  {
    label: "Categorías",
    accesor: (item: Food) => item.category?.title
  },
  {
    label: "Acciones",
    accesor: (item: Food) => (
      <>
        <Button
          type="button"
          style="icon"
          onClick={() => {
            console.log(item)
          }}
        >
          _
        </Button>

        <Button
          type="button"
          style="icon"
          onClick={() => {
            console.log(item)
          }}
        >
          x
        </Button>
      </>
    )
  },
]

export default function FoodsView() {
  const { data, error, isPending, getFoods } = useGetFoods()

  useEffect(() => {
    getFoods()
  }, [])

  if (error) {
    return (
      <>
        <div>{error}</div>
        <Button onClick={getFoods}>Retry</Button>
      </>
    )
  }

  if (!data || isPending) {
    return <Loading />
  }

  return (
    <div>
      <h1>Foods</h1>
      <Table columns={columns} data={data} searchField={true} toolbar={
        (
          <>
            <Button onClick={getFoods}>Refresh</Button>
            <Button onClick={getFoods}>Nuevo</Button>
          </>
        )
      } />
    </div>
  )
}