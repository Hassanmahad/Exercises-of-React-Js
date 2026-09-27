const Dashboard = () => {
  // Stats
  const stats = [
    {
      id: 1,
      title: "Average Grade",
      value: "88%",
      icon: "📊",
    },
    {
      id: 2,
      title: "Courses",
      value: "3",
      icon: "📚",
    },
    {
      id: 3,
      title: "Study Hours",
      value: "45h",
      icon: "⏰",
    },
    {
      id: 4,
      title: "Assignments",
      value: "12",
      icon: "✍️",
    },
  ];

  // Courses
  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      next: "Components & Props",
      instructor: "Sarah Wilson",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      next: "Async/Await",
      instructor: "Mike Johnson",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 100,
      next: "Color Theory",
      instructor: "Emily Chen",
    },
  ];

  // Assignments
  const assignments = [
    {
      id: 1,
      title: "Build a Todo App",
      course: "React Fundamentals",
      status: "pending",
      dueDate: "2024-03-20",
    },
    {
      id: 2,
      title: "API Integration",
      course: "JavaScript Advanced",
      status: "completed",
      dueDate: "2024-03-18",
    },
    {
      id: 3,
      title: "Design System",
      course: "UI/UX Design",
      status: "in-progress",
      dueDate: "2024-03-25",
    },
  ];

  // Announcements
  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      description: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      description: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  const getDifficultyColor = (status) => {
    switch(status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-yellow-600 bg-yellow-100';
      case 'pending': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between rounded-2xl bg-white p-6 shadow">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, Student!
            </h1>
            <p className="text-gray-500">
              Here's what's happening with your courses today.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-2xl">🔔</span>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white">
              S
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  {stat.icon}
                </span>

                <div>
                  <p className="text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold">
                    {stat.value}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Left */}
          <div className="rounded-2xl bg-white p-6 shadow lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">
              Course Progress
            </h2>

            <div className="space-y-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-xl bg-gray-50 p-6"
                >
                  <div className="mb-2 flex justify-between">
                    <h3 className="font-semibold">
                      {course.name}
                    </h3>

                    <span>
                      {course.progress}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-gray-200">
                    <div
                      className="h-3 rounded-full bg-blue-500"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    ></div>
                  </div>

                  <div className="mt-3 flex justify-between text-sm text-gray-500">
                    <p>Next: {course.next}</p>

                    <p>{course.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">

            {/* Assignments */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-5 text-xl font-bold">
                Upcoming Assignments
              </h2>

              <div className="space-y-4">
                {assignments.map((item) => (
                  <div key={item.id}>
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {item.course}
                        </p>
                      </div>

                      <span className={`rounded-full px-3 py-1
                        ${getDifficultyColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                      Due: {item.dueDate}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-5 text-xl font-bold">
                Announcements
              </h2>

              <div className="space-y-5">
                {announcements.map((item) => (
                  <div
                    key={item.id}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;