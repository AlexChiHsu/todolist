export interface CreditsProp {
  id: number;
  cast: [
    {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      cast_id: number;
      character: string;
      credit_id: string;
      order: number;
      job: string;
      department: string;
    }
  ];
  crew: [
    {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      credit_id: string;
      department: string;
      job: string;
    }
  ];
}

export interface CommentsProp {
  id: number;
  page: number;
  results: [
    {
      author: string;
      author_details: {
        name: string;
        username: string;
        avatar_path: string;
        rating: number;
      };
      content: string;
      created_at: string;
      id: string;
      updated_at: string;
      url: string;
    }
  ];
  total_pages: number;
  total_results: number;
}

export interface CommentContentProp {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
