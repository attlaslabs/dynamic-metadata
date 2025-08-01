export const config = {
  domainSource: "https://95377dcc-6454-4c23-8e96-c106c2b84546.weweb-preview.io",
  patterns: [
      {
          pattern: "/c/[^/]+",
          metaDataEndpoint: "https://ofwppfqdauuyxblgkips.functions.supabase.co/chat-meta/{slug}"
      },
      {
          pattern: "/p/[^/]+",
          metaDataEndpoint: "https://xeo6-2sgh-ehgj.n7.xano.io/api:LjwxezTv/team/profile/{profile_id}/meta"
      }
  ]
};
