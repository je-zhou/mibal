import IFlow from "../../../types/flow.type"

interface FlowTileProps {
    flow: IFlow
}

export default function FlowTile({ flow }: FlowTileProps) {
    return (<div>
        <p>{flow.name}</p>
        <p>Flow Amount: ${flow.getBalance()}</p>
    </div>)

}