{ pkgs, ... }:
{
  name = "storm-software/action-notify";

  dotenv.enable = true;
  dotenv.filename = [
    ".env"
    ".env.local"
  ];
  dotenv.disableHint = true;

  packages = with pkgs; [
    zizmor
  ];
}
