class Place {
    constructor(title, imageUri, address, location) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location; // Example: { lat: 0.83784392, lng: 1.3878292 }
        this.id = new Date().toString() + Math.random().toString();
    }
}