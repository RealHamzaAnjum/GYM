import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>
          Discover our most popular workout sessions designed to help you achieve your fitness goals. Whether you're looking to build strength, improve endurance, or simply stay active, we have something for everyone.
        </p>
        <img src="/img5.jpg" alt="Top Workout Sessions" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Join our featured bootcamps to push your limits and reach new heights. Our bootcamps are designed to challenge you and deliver results through high-intensity training and expert guidance.
        </p>
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Interval Training (HIIT)</h4>
            <p>
              Maximize your calorie burn and boost your metabolism with our HIIT sessions. This high-energy workout combines short bursts of intense exercise with recovery periods to keep you challenged and engaged.
            </p>
          </div>
          <div>
            <h4>Strength and Conditioning</h4>
            <p>
              Build muscle and enhance your overall strength with our strength and conditioning bootcamps. Focused on weight training and functional movements, these sessions are ideal for athletes and fitness enthusiasts.
            </p>
          </div>
          <div>
            <h4>Yoga and Flexibility</h4>
            <p>
              Improve your flexibility, balance, and mental focus with our yoga bootcamps. Suitable for all levels, these sessions offer a mix of dynamic and static poses to enhance your physical and mental well-being.
            </p>
          </div>
          <div>
            <h4>Bootcamp for Beginners</h4>
            <p>
              New to fitness? Our bootcamp for beginners is perfect for you. With a focus on basic exercises and proper technique, this program will help you build a solid foundation and gain confidence in your fitness journey.
            </p>
          </div>
          <div>
            <h4>Advanced Cardio Blast</h4>
            <p>
              Ready to take your cardio to the next level? Our Advanced Cardio Blast bootcamp focuses on high-intensity cardiovascular exercises designed to improve your endurance, speed, and overall fitness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
