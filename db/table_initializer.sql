CREATE TABLE IF NOT EXISTS favorites (
  isbn INTEGER PRIMARY KEY,
  title text,
  author text,
  image_url text,
  average_rating text,
  rating_count text
);