export interface Poll {
  id: number; // there are 500 voters
  question: string; // Which political party would you like to vote?
  results: number[]; // [230, 110, 120,..]
  options: string[]; // ["BJP", "Congress", "AAP",...]
  thumbnail: string; // https://image.png
}

export interface Voter {
  id: string; //0xJHADADHGAD232432 The account details
  idVerificationDoc: string[]; // passport, voterID, DL
  idVerificationDocNum: string; // document number
  voted: number[]; // 12
}
