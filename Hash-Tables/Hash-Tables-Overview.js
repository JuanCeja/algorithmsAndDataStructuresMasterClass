// ====================================== HASH TABLES IN THE WILD =======================================

// Python has dictionaries
// JS has Objects and Maps. Objects have some restrictions, but are basically hash tables. In OBJECTS you are only allowed to use strings as keys. 
// Java, Go, and Scala have Maps.
// Ruby has Hashes


// ======================================= DEALING WITH COLLISIONS =======================================

// Even with a large array and a great hash function, collisions are inevitable.

// There are many strategies for dealing with collisions, but we'll focus on two: 
// SEPARATE CHAINING
// LINEAR PROBING


// =========================================== SEPARATE CHAINING ===========================================

// With separate chaining, at each index in our array we store values using a more sophisticated data structure(e.g. an array or linked list). This allows us to store multiple key-value pairs at the same position.

// In separate chaining we can more data than the length of our table. It allows us to have more data.

// ============================================= LINEAR PROBING =============================================

// With Linear Probing, when we find a collision, we search through the array to find the next empty slot. Unlike with separate chaining, this allows us to store a single key-value pair at each index.

// In linear probing we can only store data at the length of the table unlike separate chaining.