import { MdSearch } from 'react-icons/md'

interface SearchBarProps {}

export const SearchBar: React.FunctionComponent<SearchBarProps> = () => {
	return (
		<form className='md:border-2 md:border-gray-200 rounded-full flex items-center justify-end md:divide-x-2 w-full h-10 md:w-[62%]'>
			<input
				className='outline-none w-full h-full rounded-s-full text-base leading-5 px-3 hidden md:block'
				placeholder='Search'
			/>
			<button
				className='px-2 md:px-5 py-[6px] rounded-full md:rounded-none md:rounded-r-full hover:bg-gray-200 duration-100 bg-white'
				type='submit'>
				<i>
					<MdSearch size={24} />
				</i>
			</button>
		</form>
	)
}
