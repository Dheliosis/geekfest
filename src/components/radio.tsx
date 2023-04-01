import { useState } from "react";

export default function RadioButton({ question }: any) {

	const [selectedResponse, setSelectedResponse] = useState(-1)

	const handleSelectedResponse = (index: number) => {
		question.responses.forEach((response: any) => {
			response.isCheck = false
		});
		question.responses[index].isCheck = true
		setSelectedResponse(index)
	}

	return (
		<>
			<h2 className="font-bold">{question.title}</h2>
			<form>
				{question.responses.map((response: any, index: number) => {
					return (
						<div key={`${question.id}-${index}`} className="mr-8">
							<label>
								<input type="radio" name={`${question.id}-${index}`} value={response.type} checked={selectedResponse === index} onChange={() => handleSelectedResponse(index)} className="mr-1.5 accent-mds-pink"></input>
								{response.label}
							</label>
						</div>
					)
				})}
			</form>
		</>
	)
}
