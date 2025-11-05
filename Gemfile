source "https://rubygems.org"

# GitHub Pages가 Jekyll과 대부분의 플러그인 버전을 pin합니다.
gem "github-pages", "~> 232", group: :jekyll_plugins

# Jekyll 플러그인
group :jekyll_plugins do
  # github-pages가 jekyll-feed를 포함하므로 굳이 버전 고정하지 말기
  gem "jekyll-feed"              # ← 버전 지정 X (혹은 이 줄을 삭제해도 됨)
  gem "jekyll-last-modified-at"
end

# --- Windows 전용 보조 젬 (CI 리눅스에선 설치 안 됨) ---
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  gem "wdm", "~> 0.1"
end
# -------------------------------------------------------
