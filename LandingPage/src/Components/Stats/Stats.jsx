// import './Stats.css'

const Stats = () => {
  return (
    <section className="stats-container relative px-[50px] max-w-[30%] top-[200px]">
        <table className='border-collapse text-left m-0'>
            <thead>
                <tr>
                    <th className='text-[2.8rem] w-[20%]'>1k+</th>
                    <th className='text-[2.8rem] w-[20%]'>500+</th>
                    <th className='text-[2.8rem] w-[20%]'>250k+ </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='relative bottom-[4px] text-[rgb(109,116,128)]'>Brands</td>
                    <td className='relative bottom-[4px] text-[rgb(109,116,128)]'>Shops</td>
                    <td className='relative bottom-[4px] text-[rgb(109,116,128)]'>Customers</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default Stats