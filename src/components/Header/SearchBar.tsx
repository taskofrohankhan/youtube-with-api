'use client'

import { MdSearch, MdMic } from 'react-icons/md'
import { Button } from '../Base/Button'

interface SearchBarProps {}

export const SearchBar: React.FunctionComponent<SearchBarProps> = () => {
	return (
			<div className='w-full md:w-[62%] 3xl:max-w-[1920px] flex gap-x-2 justify-end md:justify-center'>
				<form
					onSubmit={(event) => event.preventDefault()}
					className='md:border md:border-gray-300 rounded-full flex items-center justify-end md:divide-x w-full h-10'>
					<input
						className='outline-none w-full h-full rounded-s-full text-base leading-5 px-3 hidden md:block'
						placeholder='Search'
					/>
					<button
						className='px-2 md:px-5 py-[7px] rounded-full md:rounded-none md:rounded-r-full hover:bg-gray-300 duration-100 bg-white'
						type='submit'>
						<i>
							<MdSearch size={24} />
						</i>
					</button>
				</form>
				<Button className='p-2 bg-transparent md:bg-gray-200 hover:bg-gray-300'>
					<MdMic size={24} />
				</Button>
			</div>
	)
}
