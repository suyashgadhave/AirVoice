export default function OfferTable({ offers }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Recharge Plan</th>
          <th>Data</th>
          <th>Validity</th>
          <th>SMS</th>
        </tr>
      </thead>
      <tbody>
        {offers.map(o => (
          <tr key={o.id}>
            <td>₹{o.plan}</td>
            <td>{o.data}</td>
            <td>{o.validity}</td>
            <td>{o.sms}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
