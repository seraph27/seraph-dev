"use client"
import { Checkbox } from "../shadcn/checkbox"
import Image from "next/image"

const ChangeLogList = ({text, date, media}) => {
	return(
		<div className="relative flex flex-col ">
			<div className="mt-3 leading-normal">
				<Checkbox
				checked={true}
				/> {text} ({date})
			</div>
			<div className="flex items-center justify-center">
			{media && (
				<Image
					src={media}
					alt="preview"
					width={500}
					height={300}
					quality={100}
					className="!mb-0 rounded-md"
				/>
			)}
			</div>
		</div>

	) 	
}

export default ChangeLogList
