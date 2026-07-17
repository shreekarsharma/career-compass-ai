import Card from "../components/Card";
import Button from "../components/Button";

const Profile = () => {
  // Temporary user data (replace with API data later)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profession: "Frontend Developer",
    joined: "July 2026",
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          My Profile
        </h1>
        <p className="mt-2 text-gray-600">
          View your account information and profile details.
        </p>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
            {user.name.charAt(0)}
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-500">{user.profession}</p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {user.email}
              </p>

              <p>
                <span className="font-semibold">Member Since:</span>{" "}
                {user.joined}
              </p>
            </div>

            <Button>Edit Profile</Button>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card hover>
          <h3 className="text-lg font-semibold text-gray-800">
            Resume Analyses
          </h3>
          <p className="mt-3 text-4xl font-bold text-blue-600">5</p>
        </Card>

        <Card hover>
          <h3 className="text-lg font-semibold text-gray-800">
            Job Matches
          </h3>
          <p className="mt-3 text-4xl font-bold text-green-600">3</p>
        </Card>

        <Card hover>
          <h3 className="text-lg font-semibold text-gray-800">
            Average Match
          </h3>
          <p className="mt-3 text-4xl font-bold text-purple-600">84%</p>
        </Card>
      </div>
    </div>
  );
};

export default Profile;