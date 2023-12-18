import MainLayout from '../components/layouts/MainLayout'
import FeaturedMedia from '../components/UI/Featured/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
    </MainLayout>
  )
}
