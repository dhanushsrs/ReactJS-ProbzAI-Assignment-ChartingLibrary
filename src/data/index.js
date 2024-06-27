const sampleData = async () => {
  const data = [
    {
      timestamp: "2023-01-01T00:00:00Z",
      value: 10,
    },
    {
      timestamp: "2023-01-02T00:00:00Z",
      value: 12,
    },
    {
      timestamp: "2023-01-03T00:00:00Z",
      value: 5,
    },
    {
      timestamp: "2023-01-04T00:00:00Z",
      value: 8,
    },
    {
      timestamp: "2023-01-05T00:00:00Z",
      value: 15,
    },
    {
      timestamp: "2023-01-06T00:00:00Z",
      value: 7,
    },
    {
      timestamp: "2023-01-07T00:00:00Z",
      value: 11,
    },
    {
      timestamp: "2023-01-08T00:00:00Z",
      value: 9,
    },
    {
      timestamp: "2023-01-09T00:00:00Z",
      value: 13,
    },
    {
      timestamp: "2023-01-10T00:00:00Z",
      value: 6,
    },
    {
      timestamp: "2023-01-11T00:00:00Z",
      value: 14,
    },
    {
      timestamp: "2023-01-12T00:00:00Z",
      value: 10,
    },
    {
      timestamp: "2023-01-13T00:00:00Z",
      value: 8,
    },
    {
      timestamp: "2023-01-14T00:00:00Z",
      value: 12,
    },
    {
      timestamp: "2023-01-15T00:00:00Z",
      value: 7,
    },
    {
      timestamp: "2023-01-16T00:00:00Z",
      value: 11,
    },
    {
      timestamp: "2023-01-17T00:00:00Z",
      value: 9,
    },
    {
      timestamp: "2023-01-18T00:00:00Z",
      value: 13,
    },
    {
      timestamp: "2023-01-19T00:00:00Z",
      value: 6,
    },
    {
      timestamp: "2023-01-20T00:00:00Z",
      value: 14,
    },
    {
      timestamp: "2023-01-21T00:00:00Z",
      value: 10,
    },
    {
      timestamp: "2023-01-22T00:00:00Z",
      value: 8,
    },
    {
      timestamp: "2023-01-23T00:00:00Z",
      value: 12,
    },
    {
      timestamp: "2023-01-24T00:00:00Z",
      value: 7,
    },
    {
      timestamp: "2023-01-25T00:00:00Z",
      value: 11,
    },
    {
      timestamp: "2023-01-26T00:00:00Z",
      value: 9,
    },
    {
      timestamp: "2023-01-27T00:00:00Z",
      value: 13,
    },
    {
      timestamp: "2023-01-28T00:00:00Z",
      value: 6,
    },
    {
      timestamp: "2023-01-29T00:00:00Z",
      value: 14,
    },
    {
      timestamp: "2023-01-30T00:00:00Z",
      value: 10,
    },
    {
      timestamp: "2023-01-31T00:00:00Z",
      value: 8,
    },
    {
      timestamp: "2023-02-01T00:00:00Z",
      value: 12,
    },
    {
      timestamp: "2023-02-02T00:00:00Z",
      value: 7,
    },
    {
      timestamp: "2023-02-03T00:00:00Z",
      value: 11,
    },
    {
      timestamp: "2023-02-04T00:00:00Z",
      value: 9,
    },
    {
      timestamp: "2023-02-05T00:00:00Z",
      value: 13,
    },
    {
      timestamp: "2023-02-06T00:00:00Z",
      value: 6,
    },
    {
      timestamp: "2023-02-07T00:00:00Z",
      value: 14,
    },
    {
      timestamp: "2023-02-08T00:00:00Z",
      value: 10,
    },
    {
      timestamp: "2023-02-09T00:00:00Z",
      value: 8,
    },
    {
      timestamp: "2023-02-10T00:00:00Z",
      value: 12,
    },
    {
      timestamp: "2023-02-11T00:00:00Z",
      value: 7,
    },
    {
      timestamp: "2023-02-12T00:00:00Z",
      value: 11,
    },
    {
      timestamp: "2023-02-13T00:00:00Z",
      value: 9,
    },
    {
      timestamp: "2023-02-14T00:00:00Z",
      value: 13,
    },
    {
      timestamp: "2023-02-15T00:00:00Z",
      value: 6,
    },
    {
      timestamp: "2023-02-16T00:00:00Z",
      value: 14,
    },
    {
      timestamp: "2023-02-17T00:00:00Z",
      value: 10,
    },
    {
      timestamp: "2023-02-18T00:00:00Z",
      value: 8,
    },
    {
      timestamp: "2023-02-19T00:00:00Z",
      value: 12,
    },
    {
      timestamp: "2023-02-20T00:00:00Z",
      value: 7,
    },
    {
      timestamp: "2023-02-21T00:00:00Z",
      value: 11,
    },
    {
      timestamp: "2023-02-22T00:00:00Z",
      value: 9,
    },
    {
      timestamp: "2023-02-23T00:00:00Z",
      value: 13,
    },
    {
      timestamp: "2023-02-24T00:00:00Z",
      value: 6,
    },
    {
      timestamp: "2023-02-25T00:00:00Z",
      value: 14,
    },
    {
      timestamp: "2023-02-26T00:00:00Z",
      value: 10,
    },
    {
      timestamp: "2023-02-27T00:00:00Z",
      value: 8,
    },
    {
      timestamp: "2023-02-28T00:00:00Z",
      value: 12,
    },
    {
      timestamp: "2023-03-01T00:00:00Z",
      value: 7,
    },
    {
      timestamp: "2023-03-02T00:00:00Z",
      value: 11,
    },
    {
      timestamp: "2023-03-03T00:00:00Z",
      value: 9,
    },
    {
      timestamp: "2023-03-04T00:00:00Z",
      value: 13,
    },
    {
      timestamp: "2023-03-05T00:00:00Z",
      value: 6,
    },
    {
      timestamp: "2023-03-06T00:00:00Z",
      value: 14,
    },
    {
      timestamp: "2023-03-07T00:00:00Z",
      value: 10,
    },
    {
      timestamp: "2023-03-08T00:00:00Z",
      value: 8,
    },
    {
      timestamp: "2023-03-09T00:00:00Z",
      value: 12,
    },
    {
      timestamp: "2023-03-10T00:00:00Z",
      value: 7,
    },
    {
      timestamp: "2023-03-11T00:00:00Z",
      value: 11,
    },
    {
      timestamp: "2023-03-12T00:00:00Z",
      value: 9,
    },
    {
      timestamp: "2023-03-13T00:00:00Z",
      value: 13,
    },
    {
      timestamp: "2023-03-14T00:00:00Z",
      value: 6,
    },
    {
      timestamp: "2023-03-15T00:00:00Z",
      value: 14,
    },
  ];
  return data;
};

export default sampleData;
