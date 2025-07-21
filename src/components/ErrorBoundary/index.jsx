import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ERROR:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div>{this.state.error?.message || "Unexpected error"}</div>
          <div>
            {this.state.errorInfo?.componentStack ||
              String(this.state.errorInfo) ||
              "Something went wrong."}
          </div>
          <button
            onClick={() => {
              localStorage.clear();
              location.reload();
            }}
          >
            Clear cache & Reload
          </button>
          <div className="desc">
            <div>
              <strong style={{ fontSize: "16px" }}>
                Please try the following:
              </strong>
            </div>
            <div>Clear cache and refresh the page</div>
            <div>
              <a href="/login">Login again</a>
            </div>
            <div>
              Report us{" "}
              <a href="mailto:support@tabbythecat.com">
                support@tabbythecat.com
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
