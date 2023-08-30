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

export interface PersonProp {
  page: number;
  results: [PersonResultsProp];
  total_pages: number;
  total_results: number;
}

export interface PersonResultsProp {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null;
  known_for: [
    {
      adult: boolean;
      backdrop_path: string;
      id: number;
      title: string;
      original_language: string;
      original_title: string;
      overview: string;
      poster_path: string;
      media_type: string;
      genre_ids: [number];
      popularity: number;
      release_date: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
      origin_country: [string];
    }
  ];
}
