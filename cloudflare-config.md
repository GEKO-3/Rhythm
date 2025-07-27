# Cloudflare Protection Setup for Rhythm Boduberu

## 1. Domain Setup
- **Domain**: rhythmboduberu.com
- **Protected Pages**: 
  - `/` (index.html)
  - `/application-form.html`
  - `/sponsor-proposal.html`

## 2. Cloudflare Dashboard Configuration

### A. Security Settings
Navigate to **Security** tab in your Cloudflare dashboard:

1. **Security Level**: High
   - Path: Security > Settings > Security Level
   - Set to "High" for enhanced protection

2. **DDoS Protection**: 
   - Automatically enabled (no configuration needed)

3. **Web Application Firewall (WAF)**:
   - Enable: Security > WAF > Managed Rules
   - Turn ON all recommended rule sets

4. **Bot Fight Mode**:
   - Enable: Security > Bots > Configure
   - Turn ON "Bot Fight Mode"

### B. Page Rules Setup
Create specific rules for your protected pages:

1. **Rule 1: Index Page Protection**
   - URL: `rhythmboduberu.com/`
   - Settings:
     - Security Level: High
     - Cache Level: Standard
     - Browser Integrity Check: On

2. **Rule 2: Application Form Protection**
   - URL: `rhythmboduberu.com/application-form.html`
   - Settings:
     - Security Level: I'm Under Attack (if needed)
     - Browser Integrity Check: On
     - Disable Apps: On

3. **Rule 3: Sponsor Proposal Protection**
   - URL: `rhythmboduberu.com/sponsor-proposal.html`
   - Settings:
     - Security Level: I'm Under Attack (if needed)
     - Browser Integrity Check: On
     - Disable Apps: On

### C. Firewall Rules (Optional Enhanced Protection)
For additional protection, create custom firewall rules:

1. **Rule: Block Known Bad IPs**
   - Field: IP Source Address
   - Operator: is in
   - Value: [Known bad IP lists]
   - Action: Block

2. **Rule: Rate Limiting**
   - Field: URI Path
   - Operator: contains
   - Value: `/application-form.html` or `/sponsor-proposal.html`
   - Action: Rate limit (10 requests per minute)

## 3. DNS Configuration

### Required DNS Records:
```
Type: A
Name: @
Content: [Your server IP]
Proxy status: Proxied (Orange cloud)

Type: A  
Name: www
Content: [Your server IP]
Proxy status: Proxied (Orange cloud)

Type: CNAME
Name: www
Content: rhythmboduberu.com
Proxy status: Proxied (Orange cloud)
```

## 4. SSL/TLS Settings

1. **SSL/TLS Mode**: Full (Strict)
   - Path: SSL/TLS > Overview
   - Select "Full (strict)"

2. **Always Use HTTPS**: ON
   - Path: SSL/TLS > Edge Certificates
   - Toggle "Always Use HTTPS" to ON

3. **HTTP Strict Transport Security (HSTS)**: Enable
   - Path: SSL/TLS > Edge Certificates
   - Enable HSTS with these settings:
     - Max Age Header: 6 months
     - Apply HSTS policy to subdomains: Yes
     - Preload: Yes

## 5. Performance Optimizations

1. **Auto Minify**: Enable
   - Path: Speed > Optimization
   - Enable JavaScript, CSS, and HTML minification

2. **Brotli**: Enable
   - Path: Speed > Optimization
   - Enable Brotli compression

## 6. Analytics and Monitoring

1. **Security Events**: Monitor
   - Path: Security > Events
   - Regular check for threats and blocked requests

2. **Analytics**: Review
   - Path: Analytics & Logs > Web Analytics
   - Monitor traffic patterns and security events

## 7. Advanced Security Features (Pro/Business Plans)

If you upgrade to Pro or Business:

1. **Rate Limiting**: 
   - Path: Security > Rate Limiting
   - Set custom rate limits for forms

2. **Custom WAF Rules**:
   - Path: Security > WAF > Custom Rules
   - Create specific rules for your application

3. **Load Balancing**: 
   - Path: Traffic > Load Balancing
   - Distribute traffic across multiple servers

## 8. Mobile App Security

For mobile optimization:
1. **Mobile Redirect**: Disable
2. **Rocket Loader**: Disable (may interfere with your music player)
3. **Mirage**: Enable for image optimization

## 9. Testing Your Setup

After configuration:

1. **Test protected pages**:
   - Visit each protected page
   - Verify Cloudflare challenge appears if needed

2. **Check headers**:
   - Use browser dev tools to verify security headers
   - Look for `cf-ray` header indicating Cloudflare protection

3. **Performance test**:
   - Use tools like GTmetrix or PageSpeed Insights
   - Verify improved load times

## 10. Maintenance

Regular tasks:
- Review security events weekly
- Update firewall rules as needed
- Monitor analytics for unusual patterns
- Test form submissions regularly

## Emergency Procedures

If site goes down:
1. Check Cloudflare Status page
2. Review Security Events for blocks
3. Temporarily set Security Level to "Low"
4. Contact Cloudflare support if needed

## Support Resources

- Cloudflare Community: https://community.cloudflare.com/
- Documentation: https://developers.cloudflare.com/
- Support Portal: https://support.cloudflare.com/

---

**Note**: Keep this configuration file secure and update it when you make changes to your Cloudflare settings.
