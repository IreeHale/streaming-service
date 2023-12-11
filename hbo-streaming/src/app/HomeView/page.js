import MainLayout from '../components/layouts/MainLayout'
import FeaturedMedia from '../components/UI/Featured/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
    </MainLayout>
  )
}
