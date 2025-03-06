document.addEventListener("DOMContentLoaded", function () {
    const worldNewsContainer = document.getElementById("world-news-container");
    const liveNewsTicker = document.getElementById("live-world-news");

    // Sample World News Articles
    const worldNews = [
        {
            title: "US & China Discuss AI Regulations",
            description: "Top world leaders meet to discuss the future of AI and its regulations.",
            image: "images/world-news1.jpg",
            link: "#"
        },
        {
            title: "Massive Earthquake in Japan",
            description: "A powerful 8.2 magnitude earthquake shakes Tokyo, causing major disruptions.",
            image: "images/world-news2.jpg",
            link: "#"
        },
        {
            title: "NASA Discovers Earth-Like Planet",
            description: "Astronomers have found a planet similar to Earth in a distant galaxy.",
            image: "images/world-news3.jpg",
            link: "#"
        }
    ];

    // Add news articles dynamically
    worldNews.forEach(article => {
        let newsHTML = `
            <div class="news-article">
                <img src="${article.image}" alt="News Image">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.link}">Read More</a>
            </div>
        `;
        worldNewsContainer.innerHTML += newsHTML;
    });

    // Live News Updates (Scrolling)
    const liveUpdates = [
        "🌍 US and China discuss AI regulations for future governance...",
        "🚨 Japan hit by 8.2 magnitude earthquake, rescue teams deployed...",
        "🛰️ NASA discovers an Earth-like planet in a distant galaxy...",
        "💰 Global economy shows signs of recovery amid recession fears...",
        "🚀 SpaceX plans a new Mars mission with breakthrough technology..."
    ];

    liveNewsTicker.innerHTML = liveUpdates.join(" | ");
});