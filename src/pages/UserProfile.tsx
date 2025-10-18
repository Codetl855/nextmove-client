import UserProfile from '@/components/profilePage/UserProfile';

function EditProfile() {
  return (<>
      <div className="bg-gray-100 min-h-screen pt-2 md:p-6 z-20 relative">
        <h2 className="text-2xl max-w-8xl mx-auto font-semibold mb-6">Profile</h2>
        <div className="max-w-8xl mx-auto bg-white rounded-xl shadow-sm p-6">
          <UserProfile />
        </div>
      </div>
  </>);
}
export default EditProfile;
