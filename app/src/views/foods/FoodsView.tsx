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

export default function FoodsView() {
  const { data, error, isPending, getFoods } = useGetFoods()
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
    console.log("dataDelete", dataDelete)
    getFoods()
    // Toast
  }

  const columns: ColumnType<Food>[] = [
    {
      label: "Nombre",
      align: "left",
      accesor: (item: Food) => (
        <>
          <div>{item.title}</div>
          <span className="text-xs">{item.category?.title}</span>
        </>
      ),
    },
    {
      label: "Calorías \n Porción",
      align: "left",
      accesor: (item: Food) => (
        <>
          <div>{item.kc_portion}</div>
          <div>{item.portion}</div>
        </>
      ),
    },
    {
      label: "",
      width: "1%",
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

  if (!data || isPending) {
    return <MiniLoading />
  }

  return (
    <div>
      <h1>Foods</h1>
      <Table columns={columns} data={data} searchField={true} toolbar={
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