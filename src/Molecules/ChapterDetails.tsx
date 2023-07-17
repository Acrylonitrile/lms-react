import { styled } from "styled-components"
import { useDrag, useDrop } from "react-dnd/dist/hooks"
import { useRef } from "react"
import type { Identifier, XYCoord } from "dnd-core"
export interface Props {
  label: string
  id: number
  index: number
  alterSequence: (oldIndex: number, newIndex: number) => void
}

interface DragItem {
  id: number
  index: number
}

function ChapterDetails({ label, id, index, alterSequence }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "chapter",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      alterSequence(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
    drop: (item: DragItem, monitor) => {
      console.log("request sent")
    }
  })

  const [{ isDragging }, drag] = useDrag({
    type: "chapter",
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  return (
    <MainWrapper ref={ref} style={{ opacity }} isDragging={false}>
      {label}
    </MainWrapper>
  )
}
export default ChapterDetails

const MainWrapper = styled.div<{ isDragging: boolean }>`
  height: 100px;
  width: 100%;
  border: ${(props) => (props.isDragging ? "1px solid black" : "none")};
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
`
