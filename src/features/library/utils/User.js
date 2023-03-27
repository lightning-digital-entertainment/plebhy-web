class User {
  constructor(rawEvent) {
    this.pubkey = rawEvent.pubkey;
    this.created_at = rawEvent.created_at;
    this.userData = JSON.parse(rawEvent.content);
  }
}

export default User;
