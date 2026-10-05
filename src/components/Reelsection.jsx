import React from "react";
import "./ReelsSection.css";
import profileImg from "../assets/images/dropsy.jpeg"; // path apne folder ke hisaab se check karna

const instagramUrl = "https://www.instagram.com/dropshy_official/";

// Har post ka image path aur uska Instagram link yahan badalna
const posts = [
  { id: 1, image: "/images/post1.jpg", link: "https://www.instagram.com/p/DbZ3H9lGl8f/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: 2, image: "/images/post2.jpg", link: "https://www.instagram.com/p/DahD5lXGsZb/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: 3, image: "/images/post3.jpg", link: "https://www.instagram.com/p/DacCXhmjM9-/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: 4, image: "/images/post4.jpg", link: "https://www.instagram.com/p/DaZe00Xmu70/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="},
];

const PostsSection = () => {
  return (
    <section className="posts-section">
      <div className="posts-tag">FROM INSTAGRAM</div>

      <h2 className="posts-title">
        Follow Our Journey
        <br />
        On Instagram
      </h2>

      <div className="posts-line"></div>

      <p className="posts-description">
        Stay connected with Dropsy through our latest updates,
        seller stories, brand highlights, and business moments.
      </p>

      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <div className="post-profile">
                <img
                  src={profileImg}
                  alt="dropshy_official"
                  className="post-profile-image"
                />
                <div>
                  <div className="post-username">dropshy_official</div>
                  <div className="post-instagram">Instagram</div>
                </div>
              </div>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="post-view-btn"
              >
                View Post
              </a>
            </div>

            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="post-image-link"
            >
              <img
                src={post.image}
                alt={`Dropshy Instagram post ${post.id}`}
                className="post-image"
              />
            </a>
          </div>
        ))}
      </div>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-button"
      >
        Follow @dropshy_official
      </a>
    </section>
  );
};

export default PostsSection;