import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  getProfile,
  getProfileStats,
} from "../services/profileService";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfile();
        const statsData = await getProfileStats();

        setUser(userData);
        setStats(statsData.stats);
      } catch (error) {
        console.error("Failed to load profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">
        Loading profile...
      </div>
    );
  }

  if (!user || !stats) {
    return (
      <div className="text-center py-10 text-red-600">
        Failed to load profile.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="mt-2 text-gray-600">
          View your account information and activity.
        </p>
      </div>

      {/* User Card */}
      <Card>
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {user.name}
              </h2>

              <p className="text-gray-500">
                CareerCompass AI User
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">
                  Email:
                </span>{" "}
                {user.email}
              </p>

              <p>
                <span className="font-semibold">
                  Member Since:
                </span>{" "}
                {new Date(user.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    year: "numeric",
                  }
                )}
              </p>
            </div>

            <Button disabled className="hidden">
              Edit Profile (Coming Soon)
            </Button>
          </div>
        </div>
      </Card>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card hover className="hidden">
          <h3 className="text-lg font-semibold text-gray-800">
            Uploaded Resumes
          </h3>

          <p className="mt-3 text-4xl font-bold text-blue-600">
            {stats.resumeCount}
          </p>
        </Card>

        <Card hover>
          <h3 className="text-lg font-semibold text-gray-800">
            Job Matches
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-600">
            {stats.jobMatchCount}
          </p>
        </Card>

        <Card hover>
          <h3 className="text-lg font-semibold text-gray-800">
            Average Match
          </h3>

          <p className="mt-3 text-4xl font-bold text-purple-600">
            {stats.averageMatch}%
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Profile;