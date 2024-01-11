'use client'

import { MdSearch } from 'react-icons/md'

interface SearchBarProps {}

export const SearchBar: React.FunctionComponent<SearchBarProps> = () => {
	return (
		<form
			onSubmit={(event) => event.preventDefault()}
			className='md:border md:border-gray-300 rounded-full flex items-center justify-end md:divide-x w-full h-10 md:w-[62%]'>
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
	)
}
