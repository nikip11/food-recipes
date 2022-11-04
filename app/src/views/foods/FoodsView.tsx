import { useEffect, useState } from "react"
import MiniLoading from "@/components/ui/MiniLoading"
import { useGetFoods, useDeleteFood } from "@/views/foods/hooks/useFoods"
import { Food } from "@/interfaces/types"
import MiniButton from "@/components/ui/MiniButton"
import Button from "@/components/ui/Button"
import Table from "@/components/ui/Table"
import { ColumnType } from "@/components/ui/Table/types"
import FormFood from "./FormFood"
import { Modal, useModal } from "@/components/ui/Modal"
import { AddIcon, EditIcon, Refreshicon, TrashIcon } from "@/components/Icons"

function KaloriesPortions({ food }: { food: Food }): JSX.Element {
  if (food.kc_portion && food.portion) {
    return <div>{food.kc_portion} / {food.portion}</div>
  }
  if (food.portion) {
    return <div>{food.portion}</div>
  }
  if (food.kc_portion) {
    return <div>{food.kc_portion}</div>
  }
  return <></>
}

export default function FoodsView() {
  const { items, error, isPending, getFoods } = useGetFoods()
  const { data: dataDelete, deleteFood } = useDeleteFood()
  const { isOpen, openModal, closeModal } = useModal(false)
  const [food, setFood] = useState<Food | null>(null)

  function edit(item: Food) {
    setFood(item)
    openModal()
    // setTimeout(() => {

    // }, 200)
  }

  function remove(item: Food) {
    // Alert confirm delete
    deleteFood(item)
    getFoods()
    // Toast
  }

  const columns: ColumnType<Food>[] = [
    {
      label: "Nombre",
      align: "left",
      accesor: (item: Food) => (
        <>
          <div>{item.name}</div>
          <span className="text-xs">{item.category?.name}</span>
        </>
      ),
    },
    {
      label: "Calorías % 100",
      align: "center",
      accesor: 'kc_100'
    },
    {
      label: "Calorías / Porción",
      align: "center",
      accesor: (item: Food) => (
        <KaloriesPortions food={item} />
      ),
    },
    {
      label: "",
      align: "right",
      width: 5,
      accesor: (item: Food) => (
        <>
          <MiniButton
            type="button"
            onClick={() => {
              edit(item)
            }}
          >
            <EditIcon />
          </MiniButton>

          <MiniButton
            type="button"
            onClick={() => {
              remove(item)
            }}
          >
            <TrashIcon />
          </MiniButton>
        </>
      )
    },
  ]

  useEffect(() => {
    getFoods()
  }, [])

  function handleCloseModal() {
    // getFoods()
    closeModal()
  }

  if (error) {
    return (
      <>
        <div>{error.message}</div>
        {error.cause}-{error.cause}
        <Button onClick={getFoods}>Retry</Button>
      </>
    )
  }

  if (!items || isPending) {
    return <MiniLoading />
  }

  return (
    <div>
      <h1>Foods</h1>
      <Table columns={columns} data={items} searchField={true} toolbar={
        (
          <>
            <Button onClick={getFoods} style="icon">
              <Refreshicon />
            </Button>
            <Button onClick={openModal} style="icon">
              <AddIcon />
            </Button>
          </>
        )
      } />
      <Modal isOpen={isOpen} closeModal={handleCloseModal} title="New Food">
        <FormFood formData={food} closeForm={handleCloseModal} />
      </Modal>
    </div>
  )
}