import { useRouter } from 'next/router'

const ProfileDefault = () => {

  const router = useRouter();
  const { username } = router.query;

  return <div>
    Hello {username}!
  </div>
}

export default ProfileDefault;