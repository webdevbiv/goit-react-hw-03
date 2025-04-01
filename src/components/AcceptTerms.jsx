const AcceptTerms = ({ hasAccepted, setHasAccepted }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={(e) => setHasAccepted(e.target.checked)}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

export default AcceptTerms;
