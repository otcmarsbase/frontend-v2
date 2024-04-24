export namespace FeedbackCreate {
  export type Payload = {
    text: string;
    page: string;
    rating: number;
  }

  export type Result = void;
}
