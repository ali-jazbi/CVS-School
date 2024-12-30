// Sample review data
const reviews = [
	{
		id: 1,
		name: "DH",
		rating: 5,
		date: "Oct 17, 2025",
		content:
			"دوره‌ای فوق‌العاده و عمیق. احساس می‌کنم اصول پایه را به‌خوبی یاد گرفته‌ام و حالا می‌توانم تمرین کنم. از این خوشم آمد که دوره شامل ویدیوها، مطالب خواندنی و تمرینات بود و به این ترتیب تنوع داشت.",
	},
	{
		id: 2,
		name: "MB",
		rating: 4,
		date: "Jan 27, 2025",
		content:
			"توضیحات عالی و بینش عمیق.\n\nمتأسفانه برخی از محتواها ترتیب اشتباهی دارند که پیگیری را دشوار می‌کند یا حتی اشتباه هستند... همچنین تست‌های خودکار نیاز به اصلاح دارند.",
	},
];

// Function to create star rating
function createStars(rating) {
	return "★".repeat(rating) + "★".repeat(5 - rating);
}

// Function to create review card
function createReviewCard(review) {
	return `
        <div class="review-card">
            <div class="review-header">
                <div class="avatar">${review.name[0]}</div>
                <div class="review-info">
                    <div class="reviewer-name">${review.name}</div>
                    <div class="stars">${createStars(review.rating)}</div>
                    <div class="review-date">نوشته شده در ${review.date}</div>
                </div>
            </div>
            <div class="review-content">${review.content}</div>
        </div>
    `;
}

// Render reviews
function renderReviews() {
	const reviewList = document.getElementById("reviewList");
	reviewList.innerHTML = reviews
		.map((review) => createReviewCard(review))
		.join("");
}

// Initialize the review section
document.addEventListener("DOMContentLoaded", renderReviews);
