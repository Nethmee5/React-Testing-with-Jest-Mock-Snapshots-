import { render, waitFor, screen } from "@testing-library/react";
import Comments from "../Comments";

import axios from "axios";

jest.mock("axios");

const dummyComments = [
  {
    PostId: 1,
    Id: 1,
    name: "id lanore ex et wuam",
    email: "dsfdfdf.biz",
    body: "lahfhffjffg",
  },
  {
    PostId: 1,
    Id: 2,
    name: "id lanore ex et wuam",
    email: "dsfdfdf.biz",
    body: "lahfhffjffg",
  },
];

describe("Comments", () => {
  it("should get all comments", async () => {
    axios.get.mockResolvedValue({ data: dummyComments });

    render(<Comments />);

    const comments = await waitFor(() => screen.getAllByTestId("comment"));

    expect(comments).toHaveLength(2);
  });
});
