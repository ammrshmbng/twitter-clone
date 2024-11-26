const RightPanelSkeleton = () => {
	return (
		<div className='flex flex-col gap-2 my-2 w-52'>
			<div className='flex items-center gap-2'>
				<div className='w-8 h-8 rounded-full skeleton shrink-0'></div>
				<div className='flex justify-between flex-1'>
					<div className='flex flex-col gap-1'>
						<div className='w-12 h-2 rounded-full skeleton'></div>
						<div className='w-16 h-2 rounded-full skeleton'></div>
					</div>
					<div className='h-6 rounded-full skeleton w-14'></div>
				</div>
			</div>
		</div>
	);
};
export default RightPanelSkeleton;