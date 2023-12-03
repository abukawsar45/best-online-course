import baseApi from '../api/baseApi';

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourse: builder.query({
      query: () => '/allCourse',
      providesTags: ['Course'],
    }),
    updateCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: `/course/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Course'],
    }),
    addCourse: builder.mutation({
      query: (course) => ({
        url: '/course',
        method: 'POST',
        body: course,
      }),
      invalidatesTags: ['Course'],
    }),
  }),
});

export const { useAddCourseMutation, useGetCourseQuery, useUpdateCourseMutation } =
  courseApi;
