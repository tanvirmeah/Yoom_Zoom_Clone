import CallList from '@/components/CallList'


const UpcomingPage = () => {
  return (
    <section className='text-white flex size-full flex-col gap-10 '>
        <h1 className='text-3xl font-bold'
        >
          Upcoming
        </h1>
        <CallList type= "upcoming"/>
      </section>
  )
}

export default UpcomingPage
