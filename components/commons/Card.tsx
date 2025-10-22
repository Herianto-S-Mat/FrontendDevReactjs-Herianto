
const Card = () => {
  return (
    <div className="flex flex-col mb-5 min-h-60">
			<div className="border w-full h-28 bg-slate-100"></div>
			<div className="flex flex-col gap-2 py-2">
				<h4 className="text-md max-h-5">Title</h4>
				<div className="flex gap-2">
					<span className="w-2 h-2 border"></span>
					<span className="w-2 h-2 border"></span>
					<span className="w-2 h-2 border"></span>
					<span className="w-2 h-2 border"></span>
					<span className="w-2 h-2 border"></span>
				</div>
				<div className="flex justify-between text-sm">
					<span className="flex gap-2 border-b">
						hdfsfdfd
					</span>
					<span className="flex gap-2 border-b">
						hdfsfdfd
					</span>
				</div>
			</div>
			<button className="mt-auto bg-sky-500 ">more </button>
		</div>
  )
}

export default Card