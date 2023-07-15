import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { CommunityTracker } from "../target/types/community_tracker";

describe("community-tracker", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.CommunityTracker as Program<CommunityTracker>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
