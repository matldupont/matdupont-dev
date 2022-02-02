# Customer Domains and SSL Certs

## Custom Domains

I'm rebuilding an existing site, so I already have the domain I want to use: [matdupont.dev](https://matdupont.dev)

\* Who knows what you'll see at that url by the time you read this.

I purchased mine from [rebel.com](https://rebel.com). I'm their former _R&D Technical Lead_ and had purchased it when the `.dev` TLD first dropped.

In either case, I'm not buying a new one from AWS Route53.

If I navigate to my [CloudFront distribution](https://console.aws.amazon.com/cloudfront), I see under _Settings_ that I have no _Alternate domain names_ listed.

Luckily, I can _Edit_ these settings and get going.

Under **Alternate domain name (CNAME) - _optional_**, I'll be adding a few items.

- matdupont.dev
- www.matdupont.dev
- \*.matdupont.dev

If I try to save now, I get a warning telling me I need to "attach a trusted certification..."

Scroll back up a bit and it looks like I can request said certificate right here! 👌

## SSL Certificate

I've now entered the **Request certificate** flow on a new page. AWS isn't exactly the gold standard when it comes to UX, so I hope this ties back to the previous settings I have, mid-edit.

I'm left with only one enabled certificate type to choose from: _public_. Cool. ... Next!

Now, I need to enter my _Fully qualified domain name_. After clicking the info link, I see they're referring to the domain I own and highlight that I can use a leading \* wildcard to protect any subdomain on my site. I can also add more than one. Sweet.

```
matdupont.dev
*.matdupont.dev
```

I have access to the DNS records on my domain through my Rebel account, so I'll select _DNS validation - recommended_.

**Request!**

Apparently it's now _Pending validation_. It's not really telling me much else up front.

...

Okay, after a few minutes of digging, I found [this](https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html)

Luckily, I still have the _AWS Certificate Manager_ open, showing me the pending certificate.

I'll _Export to CSV_ under the _Domains_ section to get my records. I don't feel like sifting through a CSV file, even one this short, so I'll import this into a Google Sheet.

Now I can see my Domain names, Record Names, Record Types and Records Values. It's the same cert, so the data is identical for both domains listed.

I make my way over to the Domain Manager in my Rebel account, select my domain and _Manage Advanced DNS Records_. Here, I add one **CNAME** record from the data in my `.csv`. Again, it's only one unique value.

The key is that the host/alias/name/whatever field should contain the _CNAME name_ from the file, **not** your custom domain. This CNAME is strictly for certificate validation. The value is the value. Save.

I've read this can take a while.

....

Okay, so at some point in the last hour, the ACM certificate I requested appeared in the _Custom SSL certificates_ dropdown in the CloudFront distribution settings way back at the start of this ordeal. I'll select that one and finally save my changes.

At this point, my Cloudfront distribution shows the two _Alternate domain names_ as well as the _Custom SSL certificate_.

The last thing I'll do is head back to Rebel and create another pair of CNAME records. One for each alternate domain I had listed in the distribution.

This time, the alias/name/etc... is the alternate domain and the _Distribution domain name_ is the value. Same value for both.

... wait a bit for the TTL to elapse.

## Done!

[matdupont.dev](https://matdupont.dev)
