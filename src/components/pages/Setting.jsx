function Settings() {
  return (
    <div className="container py-5">
      {/* Logo */}
      <div className="mb-4"></div>

      {/* Header */}
      <h1 className="display-4 text-muted mb-4">Notifications</h1>

      {/* All Notifications and Badge */}
      <div className="d-flex align-items-center mb-4">
        <h2 className="text-warning fw-bold me-3">All Notifications</h2>
        <span className="badge bg-warning text-dark fs-5">5</span>
      </div>

      {/* Notification Cards */}
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card shadow-sm rounded-3 bg-light">
            <div className="card-body position-relative">
              <h3 className="card-title fw-bold">
                Instagram Followers reaches 100k🤩🔥
              </h3>
              <p className="card-text">
                Congratulations! 🎉 You've just hit 100,000 followers on
                Instagram! 🚀✨ Your community is growing, and your impact is
                stronger than ever. Keep sharing your amazing content! 💙
                #100KStrong
              </p>
              <span className="position-absolute bottom-0 end-0 me-3 mb-2 fw-bold">
                12Feb
              </span>
              <svg
                className="position-absolute top-0 end-0 me-3 mt-2"
                width="40"
                height="40"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Close icon SVG path remains the same */}
                <path
                  d="M16.9697 41.9697C16.6768 42.2626 16.6768 42.7374 16.9697 43.0303C17.2626 43.3232 17.7374 43.3232 18.0303 43.0303L16.9697 41.9697ZM30.5303 30.5303C30.8232 30.2374 30.8232 29.7626 30.5303 29.4697C30.2374 29.1768 29.7626 29.1768 29.4697 29.4697L30.5303 30.5303ZM29.4697 29.4697C29.1768 29.7626 29.1768 30.2374 29.4697 30.5303C29.7626 30.8232 30.2374 30.8232 30.5303 30.5303L29.4697 29.4697ZM43.0303 18.0303C43.3232 17.7374 43.3232 17.2626 43.0303 16.9697C42.7374 16.6768 42.2626 16.6768 41.9697 16.9697L43.0303 18.0303ZM30.5303 29.4697C30.2374 29.1768 29.7626 29.1768 29.4697 29.4697C29.1768 29.7626 29.1768 30.2374 29.4697 30.5303L30.5303 29.4697ZM41.9697 43.0303C42.2626 43.3232 42.7374 43.3232 43.0303 43.0303C43.3232 42.7374 43.3232 42.2626 43.0303 41.9697L41.9697 43.0303ZM29.4697 30.5303C29.7626 30.8232 30.2374 30.8232 30.5303 30.5303C30.8232 30.2374 30.8232 29.7626 30.5303 29.4697L29.4697 30.5303ZM18.0303 16.9697C17.7374 16.6768 17.2626 16.6768 16.9697 16.9697C16.6768 17.2626 16.6768 17.7374 16.9697 18.0303L18.0303 16.9697ZM18.0303 43.0303L30.5303 30.5303L29.4697 29.4697L16.9697 41.9697L18.0303 43.0303ZM30.5303 30.5303L43.0303 18.0303L41.9697 16.9697L29.4697 29.4697L30.5303 30.5303ZM29.4697 30.5303L41.9697 43.0303L43.0303 41.9697L30.5303 29.4697L29.4697 30.5303ZM30.5303 29.4697L18.0303 16.9697L16.9697 18.0303L29.4697 30.5303L30.5303 29.4697Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Repeat similar card structure for other notifications */}
        <div className="col-12 mb-4">
          <div className="card shadow-sm rounded-3 bg-light">
            <div className="card-body position-relative">
              <h3 className="card-title fw-bold">
                YouTube subscription rate has increased by 20%
              </h3>
              <p className="card-text">
                Your YouTube channel's subscription rate has increased by 20% in
                the last month! 🎉 More viewers are loving your content—keep up
                the great work and keep them engaged! 💡🔥
              </p>
              <span className="position-absolute bottom-0 end-0 me-3 mb-2 fw-bold">
                27jun
              </span>
              {/* Same close SVG */}
            </div>
          </div>
        </div>

        <div className="col-12 mb-4">
          <div className="card shadow-sm rounded-3 bg-light">
            <div className="card-body position-relative">
              <h3 className="card-title fw-bold">Your Post is on Fire! 🔥</h3>
              <p className="card-text">
                Your latest post just hit 2,000 likes on Facebook! 🎉👏 Your
                audience is loving it—keep sharing amazing content and engaging
                with your community! 💙
              </p>
              <span className="position-absolute bottom-0 end-0 me-3 mb-2 fw-bold">
                2jun
              </span>
              {/* Same close SVG */}
            </div>
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-4">
        <button className="btn btn-outline-dark btn-lg">
          Load More
          <svg
            className="ms-2"
            width="20"
            height="20"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 25L30 37.5L42.5 25"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Settings;
